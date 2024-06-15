import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUser } from "../../../contexts/UserContext";
import "./AccountEdit.css";
import { AccountEditModalConfirmation } from "./AccountEditModalConfirmation";

type FormData = {
  username: string;
  surname: string;
  email: string;
  phone: string;
  address: string;
};

const schema = yup
  .object({
    username: yup.string().required("Imię jest wymagane"),
    surname: yup.string().required("Nazwisko jest wymagane"),
    email: yup
      .string()
      .email("Podaj prawidłowy adres email")
      .required("Email jest wymagany"),
    phone: yup
      .string()
      .matches(
        /^[0-9]{9}$/,
        "Podaj prawidłowy numer telefonu składający się z 9 cyfr",
      )
      .required("Numer telefonu jest wymagany"),
    address: yup.string().required("Adres zamieszkania jest wymagany"),
  })
  .required();

export function AccountEdit() {
  const { user, setUser } = useUser();
  const [confirmationModal, setConfirmationModal] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      username: user?.name || "",
      surname: user?.surname || "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: user?.address || "",
    },
  });

  useEffect(() => {
    if (user) {
      setValue("username", user.name);
      setValue("surname", user.surname);
      setValue("email", user.email);
      setValue("phone", user.phone);
      setValue("address", user.address);
    }
  }, [user, setValue]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setUser({
      name: data.username,
      surname: data.surname,
      email: data.email,
      phone: data.phone,
      address: data.address,
    });
    setConfirmationModal(true);
  };

  const handleCloseConfirmationModal = () => {
    setConfirmationModal(false);
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-4">
      <h2>Zmień swoje dane</h2>
      <div className="w-50">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="name">
            <Form.Label>Imię:</Form.Label>
            <Form.Control type="text" {...register("username")} />
            {errors.username && (
              <p style={{ color: "red" }}>{errors.username.message}</p>
            )}
          </Form.Group>

          <Form.Group controlId="surname">
            <Form.Label>Nazwisko</Form.Label>
            <Form.Control type="text" {...register("surname")} />
            {errors.surname && (
              <p style={{ color: "red" }}>{errors.surname.message}</p>
            )}
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" {...register("email")} />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </Form.Group>

          <Form.Group controlId="phone">
            <Form.Label>Numer telefonu:</Form.Label>
            <Form.Control type="tel" {...register("phone")} />
            {errors.phone && (
              <p style={{ color: "red" }}>{errors.phone.message}</p>
            )}
          </Form.Group>

          <Form.Group controlId="address">
            <Form.Label>Adres zamieszkania:</Form.Label>
            <Form.Control as="textarea" rows={4} {...register("address")} />
            {errors.address && (
              <p style={{ color: "red" }}>{errors.address.message}</p>
            )}
          </Form.Group>

          <Button variant="success" type="submit" className="mt-2 mb-2">
            Zapisz
          </Button>
        </Form>
      </div>

      <AccountEditModalConfirmation
        confirmationModal={confirmationModal}
        handleCloseConfirmationModal={handleCloseConfirmationModal}
      />
    </div>
  );
}
