import { Button, Form } from "react-bootstrap";
const AddForm = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="text1">
          <Form.Control type="text" placeholder="Item description" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="text1">
          <Form.Control type="text" placeholder="Qty" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="text1">
          <Form.Control type="text" placeholder="Unit Price" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="text1">
          <Form.Control type="text" placeholder="Total Price" />
        </Form.Group>
      </Form>
      <Button
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "0.5rem",
          fontSize: " 0.9rem",
          alignItems: "center",
          backgroundColor: "#2c3e50",
        }}
        class="btn btn-success add-ivo-btn"
      >
        <i className="material-icons">&#xE147;</i> <span>Add New row</span>
      </Button>
    </>
  );
};

export default AddForm;
