import React, { useState } from "react";
import { Button } from "devextreme-react/button";
import { DataGrid, Column} from "devextreme-react/data-grid";
import AddUserModal from "./components/add-user-modal";
import { IPostUser } from "./setting-users";

const MainPage: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [employees, setEmployees] = useState<IPostUser[]>([]);
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
      setEmployees(prev => 
        prev.map(emp => 
          emp.employeeId === editData.employeeId ? { ...data } : emp
        )
      );
      console.log("updated data:", data);
    } else {
      setEmployees(prev => [...prev, data]);
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
        <Column dataField="employeeId" caption="Employee ID" />
        <Column dataField="username" caption="İstifadəçi adı" />
        <Column 
          caption="Əməliyyatlar"
          width={120}
          cellRender={(cellData) => (
            <Button
              text="Edit"
              onClick={() => handleOpenEditModal(cellData.data)}
              type="default"
              height={30}
            />
          )}
        />
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