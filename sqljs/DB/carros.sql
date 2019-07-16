/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     16/7/2019 1:00:03                            */
/*==============================================================*/


drop table if exists MARCA;

drop table if exists MODELO;

drop table if exists PROPIETARIO;

drop table if exists VEHICULO;

/*==============================================================*/
/* Table: MARCA                                                 */
/*==============================================================*/
create table MARCA
(
   COD_MARCA            varchar(10) not null,
   NOMBRE               varchar(50),
   primary key (COD_MARCA)
);

/*==============================================================*/
/* Table: MODELO                                                */
/*==============================================================*/
create table MODELO
(
   COD_MARCA            varchar(10) not null,
   NOMBRE               varchar(50),
   primary key (COD_MARCA)
);

/*==============================================================*/
/* Table: PROPIETARIO                                           */
/*==============================================================*/
create table PROPIETARIO
(
   CEDULA               varchar(10) not null,
   NOMBRE               varchar(50),
   FECHANAC             varchar(20),
   primary key (CEDULA)
);

/*==============================================================*/
/* Table: VEHICULO                                              */
/*==============================================================*/
create table VEHICULO
(
   PLACA                varchar(7) not null,
   CEDULA               varchar(10),
   COD_MARCA            varchar(10),
   ANIO                 int,
   MOTOR                int,
   TRANSMISION          varchar(3),
   primary key (PLACA)
);

alter table MODELO add constraint FK_MARCA_MODELO foreign key (COD_MARCA)
      references MARCA (COD_MARCA) on delete restrict on update restrict;

alter table VEHICULO add constraint FK_REFERENCE_2 foreign key (COD_MARCA)
      references MODELO (COD_MARCA) on delete restrict on update restrict;

alter table VEHICULO add constraint FK_REFERENCE_3 foreign key (CEDULA)
      references PROPIETARIO (CEDULA) on delete restrict on update restrict;

