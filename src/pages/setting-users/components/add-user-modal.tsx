import React from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { Button } from "devextreme-react/button";
import { Popup } from "devextreme-react/popup";
import { TextBox } from "devextreme-react/text-box";
import { SelectBox } from "devextreme-react/select-box";
import { EmployeeFormModalProps, IPostUser } from "../setting-users";
import { defaultValues, products } from "../default";
import { RHFDevextreme } from "../../../core/shared/rhf-devextreme/rhf-devextreme.component";

const EmployeeFormModal: React.FC<EmployeeFormModalProps> = ({
  visible,
  onClose,
  onSubmit,
  editData = null,
  title = "Employee Form",
  width = 400,
  height = 500,
}) => {
  //   const {
  //     control,
  //     handleSubmit,
  //     watch,
  //     reset,
  //     setValue,
  //     formState: { errors },
  //   } = useForm<IPostUser>({
  //     defaultValues,
  //   });

  const methods = useForm<IPostUser>({
    mode: "onSubmit",
    defaultValues: editData ?? defaultValues,
  });

  const password = methods.watch("password");

  React.useEffect(() => {
    if (visible && editData) {
      methods.reset(editData);
    } else if (visible && !editData) {
      methods.reset(defaultValues);
    }
  }, [visible, editData, methods]);

  //   React.useEffect(() => {
  //     if (visible && editData) {
  //       Object.keys(editData).forEach((key) => {
  //         methods.setValue(key as keyof IPostUser, editData[key as keyof IPostUser]);
  //       });
  //     }
  //   }, [visible, editData, setValue]);

  const handleClose = () => {
    methods.reset();
    onClose();
  };

  const submit = methods.handleSubmit((data: IPostUser) => {
    onSubmit(data);
    handleClose();
  });

  return (
    <Popup
      visible={visible}
      onHiding={handleClose}
      dragEnabled={false}
      showTitle
      title={title}
      width={width}
      height={height}
    >
      <FormProvider {...methods}>
        <form onSubmit={submit} style={{ padding: "20px" }}>
          <div style={{ marginBottom: "20px" }}>
            <RHFDevextreme
              name="employeeId"
              rules={{ required: "Employee ID mütləqdir" }}
              control={methods.control}
              component={SelectBox}
              componentProps={{
                dataSource: products,
                displayExpr: "Name",
                valueExpr: "ID",
                width: "100%",
                placeholder: "Employee ID",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <RHFDevextreme
              name="username"
              control={methods.control}
              component={TextBox}
              componentProps={{
                placeholder: "İstifadəçi adı",
                width: "100%",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <RHFDevextreme
              name="password"
              control={methods.control}
              rules={{
                required: "Parol mütləqdir",
                minLength: {
                  value: 5,
                  message: "Parol ən az 5 simvol olmalıdır",
                },
              }}
              component={TextBox}
              componentProps={{
                mode: "password",
                placeholder: "Parol",
                width: "100%",
              }}
            />
          </div>

          <div style={{ marginTop: 20 }}>
            <RHFDevextreme
              name="repeatPassword"
              control={methods.control}
              rules={{
                required: "Parol təkrar mütləqdir",
                validate: (value: string, formValues: IPostUser) =>
                  value === formValues.password || "Parollar üst-üstə düşmür",
              }}
              component={TextBox}
              componentProps={{
                mode: "password",
                placeholder: "Təkrar parol",
                width: "100%",
              }}
            />
          </div>

          <Button text="Submit" type="default" useSubmitBehavior width="100%" />
        </form>
      </FormProvider>
    </Popup>
  );
};

export default EmployeeFormModal;
