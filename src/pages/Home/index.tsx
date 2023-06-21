import { useContext, useState } from "react";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { TechList } from "../../components/TechList";
import { HomeStyle } from "./style";
import ModalEdit from "../../components/ModalEdit";
import ModalCreate from "../../components/ModalCreate";
import { TechContext } from "../../providers/TechProvider";

export const Home = () => {
  const {
    setIsOpenModalCreate,
    isOpenModalCreate,
    isOpenModalEdit,
    setIsOpenModalEdit,
  } = useContext(TechContext);
  return (
    <HomeStyle>
      {isOpenModalEdit ? (
        <>
          <ModalEdit
            setIsOpenModal={setIsOpenModalEdit}
            isOpenModal={isOpenModalEdit}
          ></ModalEdit>
        </>
      ) : (
        <></>
      )}
      {isOpenModalCreate ? (
        <>
          <ModalCreate
            setIsOpenModal={setIsOpenModalCreate}
            isOpenModal={isOpenModalCreate}
          ></ModalCreate>
        </>
      ) : (
        <></>
      )}
      <Navbar />
      <Header />
      <TechList
        setIsOpenModal={setIsOpenModalEdit}
        setIsOpenModalCreate={setIsOpenModalCreate}
        isOpenModal={isOpenModalEdit}
      />
    </HomeStyle>
  );
};
