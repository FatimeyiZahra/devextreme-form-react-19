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
            <label>Employee ID</label>
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
              }}
            />
          </div>
          {/* <Controller
            name="employeeId"
            control={methods.control}
            rules={{ required: "Employee ID mütləqdir" }}
            render={({ field }) => (
              <SelectBox
                dataSource={products}
                displayExpr="Name"
                valueExpr="ID"
                value={field.value}
                onValueChanged={(e) => field.onChange(e.value)}
                width="100%"
              />
            )}
          />
          {methods.formState.errors.employeeId && (
            <div style={{ color: "red", fontSize: "12px" }}>
              {methods.formState.errors.employeeId.message}
            </div>
          )} */}
          <div style={{ marginBottom: "20px" }}>
            <label>İstifadəçi adı</label>
            <Controller
              name="username"
              control={methods.control}
              rules={{ required: "İstifadəçi adı mütləqdir" }}
              render={({ field }) => (
                <TextBox
                  value={field.value}
                  onValueChanged={(e) => field.onChange(e.value)}
                  width="100%"
                  isValid={!methods.formState.errors.username}
                />
              )}
            />
            {methods.formState.errors.username && (
              <div style={{ color: "red", fontSize: "12px" }}>
                {methods.formState.errors.username.message}
              </div>
            )}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>Password</label>
            <Controller
              name="password"
              control={methods.control}
              rules={{
                required: "Parol mütləqdir",
                minLength: {
                  value: 5,
                  message: "Parol ən az 5 simvol olmalıdır",
                },
              }}
              render={({ field }) => (
                <TextBox
                  value={field.value}
                  onValueChanged={(e) => field.onChange(e.value)}
                  mode="password"
                  width="100%"
                  isValid={!methods.formState.errors.password}
                />
              )}
            />
            {methods.formState.errors.password && (
              <div style={{ color: "red", fontSize: "12px" }}>
                {methods.formState.errors.password.message}
              </div>
            )}
          </div>

          <div style={{ marginBottom: "30px" }}>
            <label>Repeat Password</label>
            <Controller
              name="repeatPassword"
              control={methods.control}
              rules={{
                required: "Parol təkrar mütləqdir",
                validate: (value) =>
                  value === password || "Parollar üst-üstə düşmür",
              }}
              render={({ field }) => (
                <TextBox
                  value={field.value}
                  onValueChanged={(e) => field.onChange(e.value)}
                  mode="password"
                  width="100%"
                  isValid={!methods.formState.errors.repeatPassword}
                />
              )}
            />
            {methods.formState.errors.repeatPassword && (
              <div style={{ color: "red", fontSize: "12px" }}>
                {methods.formState.errors.repeatPassword.message}
              </div>
            )}
          </div>

          <Button text="Submit" type="default" useSubmitBehavior width="100%" />
        </form>
      </FormProvider>
    </Popup>
  );
};

export default EmployeeFormModal;
