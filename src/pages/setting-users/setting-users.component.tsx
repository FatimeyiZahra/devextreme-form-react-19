import React, { useState } from "react";
import { Button } from "devextreme-react/button";
import { DataGrid, Column } from "devextreme-react/data-grid";
import AddUserModal from "./components/add-user-modal";
import { IPostUser, IUser } from "./setting-users";

const MainPage: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [employees, setEmployees] = useState<Partial<IUser>[]>([]);
  const [editData, setEditData] = useState<IPostUser | null>(null);

  const handleOpenModal = () => {
    setEditData(null);
    setModalVisible(true);
  };

  const handleOpenEditModal = (rowData: IPostUser) => {
    setEditData(rowData);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setEditData(null);
  };

  const handleFormSubmit = (data: IPostUser) => {
    if (editData) {
      setEmployees((prev) =>
        prev.map((emp) =>
          emp.employeeId === editData.employeeId ? { ...data } : emp
        )
      );
      console.log("updated data:", data);
    } else {
      setEmployees((prev) => [...prev, data]);
      console.log("new user data:", data);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Management</h1>

      <Button
        text="Yeni Əməkdaş Əlavə Et"
        onClick={handleOpenModal}
        type="default"
        width={200}
        style={{ marginBottom: "20px" }}
      />

      <DataGrid
        dataSource={employees}
        showBorders={true}
        columnAutoWidth={true}
        keyExpr="employeeId"
      >
        {getEmployeeColumns(handleOpenEditModal).map((col) => (
          <Column key={col.dataField} {...col} />
        ))}
      </DataGrid>

      <AddUserModal
        visible={modalVisible}
        onClose={handleCloseModal}
        onSubmit={handleFormSubmit}
        editData={editData}
        title={editData ? "Əməkdaşı Redaktə Et" : "Yeni Əməkdaş Əlavə Et"}
        width={450}
        height={550}
      />
    </div>
  );
};

export default MainPage;

const getEmployeeColumns = (handleOpenEditModal: (data: IPostUser) => void) => [
  { dataField: "employeeId", caption: "Employee ID" },
  { dataField: "username", caption: "İstifadəçi adı" },
  {
    caption: "Əməliyyatlar",
    width: 120,
    cellRender: (cellData: any) => (
      <Button
        text="Edit"
        onClick={() => handleOpenEditModal(cellData.data)}
        type="default"
        height={30}
      />
    ),
  },
];
