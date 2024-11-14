"use client";
import { Expense, ExpenseModalProps } from "@/utils/interfaces";
import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Alert, Spinner } from "react-bootstrap";

const ExpenseModal: React.FC<ExpenseModalProps> = ({
  show,
  onHide,
  onSave,
  expenseToEdit,
  errorMessage,
  isLoading,
}) => {
  const [amount, setAmount] = useState<number>(expenseToEdit?.amount || 0);
  const [category, setCategory] = useState<string>(
    expenseToEdit?.category || ""
  );
  const [date, setDate] = useState<string>(expenseToEdit?.date || "");
  const [description, setDescription] = useState<string>(
    expenseToEdit?.description || ""
  );

  useEffect(() => {
    if (expenseToEdit) {
      setAmount(expenseToEdit.amount);
      setCategory(expenseToEdit.category);
      setDate(expenseToEdit.date);
      setDescription(expenseToEdit.description || "");
    } else {
      resetForm();
    }
  }, [expenseToEdit]);

  const handleSave = () => {
    const expense: Expense = { amount, category, date, description };
    if (expenseToEdit?._id) expense._id = expenseToEdit._id;
    onSave(expense);
  };

  const resetForm = () => {
    setAmount(0);
    setCategory("");
    setDate("");
    setDescription("");
  };
  const isSaveEnabled = amount > 0 && category !== "" && date !== "";

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {expenseToEdit ? "Editar Gasto" : "Agregar Gasto"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {errorMessage && (
          <Alert variant="danger" className="mb-3">
            {errorMessage}
          </Alert>
        )}
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Monto</Form.Label>
            <Form.Control
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder="Ingrese el monto"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              as="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Seleccione una categoría</option>
              <option value="Comida">Comida</option>
              <option value="Transporte">Transporte</option>
              <option value="Entretenimiento">Entretenimiento</option>
              <option value="Otros">Otros</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción (opcional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ingrese una descripción"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            onHide();
            resetForm();
          }}
          disabled={isLoading}
        >
          Cancelar
        </Button>
        {isLoading ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />{" "}
            Procesando...
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => {
              handleSave();
              resetForm();
            }}
            disabled={!isSaveEnabled}
          >
            {expenseToEdit ? "Guardar Cambios" : "Agregar Gasto"}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ExpenseModal;
