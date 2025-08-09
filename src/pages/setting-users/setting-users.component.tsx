import React, { useState } from "react";
import { Button } from "devextreme-react/button";
import { Popup } from "devextreme-react/popup";
import {
  Form,
  SimpleItem,
  Label,
  RequiredRule,
  PatternRule,
  CompareRule,
} from "devextreme-react/form";
import { IPostUser } from "./setting-users";

const initialFormData: IPostUser = {
  employeeId: null,
  username: null,
  password: null,
  repeatPassword: null,
};

const EmployeeFormModal = () => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState<IPostUser>(initialFormData);

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  const onSubmit = () => {
    console.log("Form Data:", formData);
    closeModal();
  };

  return (
    <>
      <Button text="Formu Aç" onClick={openModal} />

      <Popup
        visible={visible}
        onHiding={closeModal}
        dragEnabled={false}
        showTitle={true}
        title="Employee Form"
        width={400}
        height={400}
      >
        <Form
          formData={formData}
          onFieldDataChanged={(e) =>
            setFormData(e.component.option("formData"))
          }
          colCount={1}
          labelLocation="top"
        >
          <SimpleItem dataField="employeeId" editorType="dxNumberBox">
            <Label text="Employee ID" />
            <RequiredRule message="Employee ID mütləqdir" />
          </SimpleItem>

          <SimpleItem dataField="username">
            <Label text="Username" />
            <RequiredRule message="Username mütləqdir" />
          </SimpleItem>

          <SimpleItem
            dataField="password"
            editorType="dxTextBox"
            editorOptions={{ mode: "password" }}
          >
            <Label text="Password" />
            <RequiredRule message="Password mütləqdir" />
            <PatternRule
              pattern={/^.{5,}$/}
              message="Parol ən az 5 simvol olmalıdır"
            />
          </SimpleItem>

          <SimpleItem
            dataField="repeatPassword"
            editorType="dxTextBox"
            editorOptions={{ mode: "password" }}
          >
            <Label text="Repeat Password" />
            <RequiredRule message="Parol təkrar mütləqdir" />
            <CompareRule
              comparisonTarget={() => formData.password}
              message="Parollar üst-üstə düşmür"
            />
          </SimpleItem>
        </Form>
        <Button text="Submit" type="default" onClick={onSubmit} />
      </Popup>
    </>
  );
};

export default EmployeeFormModal;
