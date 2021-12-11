import styled from "styled-components";

const Drawer = styled.div`
  padding-left: 40px;
  display: "flex";
  flexdirection: "row";
  width: "150px";
`;

const Toolbar = styled.div`
            display: 'flex',
           color:"white",
           backgroundColor:"rgb(63,81,181)",
           margin:"5px",
           borderLeft:"11px solid black",
           borderRight:"10px solid black",
           borderTop:"8px solid black",
            height:"50px"
`;
const DrawerItem = ({ label }) => {
  return <h3>{label}</h3>;
};

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        color: "white",
        backgroundColor: "rgb(63,81,181)",
        margin: "5px",
        borderLeft: "11px solid black",
        borderRight: "10px solid black",
        borderTop: "8px solid black",
        height: "50px"
      }}
    >
      <Drawer>
        <DrawerItem label="SITENAME" />
      </Drawer>
      <Drawer>
        <DrawerItem label="About us" />
      </Drawer>
      <Drawer>
        <DrawerItem label="Prices" />
      </Drawer>
      <Drawer>
        <DrawerItem label="Offer" />
      </Drawer>
      <Drawer>
        <DrawerItem label="Contact" />
      </Drawer>
    </div>
  );
}
