import React, {useState, useEffect} from "react";
import {Menubar} from "primereact/menubar";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import SimpleCard from "./components/SimpleCard";
import "./App.css";

function App() {
    const [products, setProducts] = useState([]);
    const [items, setItems] = useState([
        {
            label: "File",
            icon: "pi pi-fw pi-file",
            items: [
                {
                    label: "New",
                    icon: "pi pi-fw pi-plus",
                    items: [
                        {
                            label: "Bookmark",
                            icon: "pi pi-fw pi-bookmark",
                        },
                        {
                            label: "Video",
                            icon: "pi pi-fw pi-video",
                        },
                    ],
                },
                {
                    label: "Delete",
                    icon: "pi pi-fw pi-trash",
                },
                {
                    separator: true,
                },
                {
                    label: "Export",
                    icon: "pi pi-fw pi-external-link",
                },
            ],
        },
        {
            label: "Edit",
            icon: "pi pi-fw pi-pencil",
            items: [
                {
                    label: "Left",
                    icon: "pi pi-fw pi-align-left",
                },
                {
                    label: "Right",
                    icon: "pi pi-fw pi-align-right",
                },
                {
                    label: "Center",
                    icon: "pi pi-fw pi-align-center",
                },
                {
                    label: "Justify",
                    icon: "pi pi-fw pi-align-justify",
                },
            ],
        },
        {
            label: "Users",
            icon: "pi pi-fw pi-user",
            items: [
                {
                    label: "New",
                    icon: "pi pi-fw pi-user-plus",
                },
                {
                    label: "Delete",
                    icon: "pi pi-fw pi-user-minus",
                },
                {
                    label: "Search",
                    icon: "pi pi-fw pi-users",
                    items: [
                        {
                            label: "Filter",
                            icon: "pi pi-fw pi-filter",
                            items: [
                                {
                                    label: "Print",
                                    icon: "pi pi-fw pi-print",
                                },
                            ],
                        },
                        {
                            icon: "pi pi-fw pi-bars",
                            label: "List",
                        },
                    ],
                },
            ],
        },
        {
            label: "Events",
            icon: "pi pi-fw pi-calendar",
            items: [
                {
                    label: "Edit",
                    icon: "pi pi-fw pi-pencil",
                    items: [
                        {
                            label: "Save",
                            icon: "pi pi-fw pi-calendar-plus",
                        },
                        {
                            label: "Delete",
                            icon: "pi pi-fw pi-calendar-minus",
                        },
                    ],
                },
                {
                    label: "Archieve",
                    icon: "pi pi-fw pi-calendar-times",
                    items: [
                        {
                            label: "Remove",
                            icon: "pi pi-fw pi-calendar-minus",
                        },
                    ],
                },
            ],
        },
        {
            label: "Quit",
            icon: "pi pi-fw pi-power-off",
        },
    ]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <>
            <Menubar model={items}/>
            <div className="bg max-w-full max-h-full flex flex-row m-4 justify-between">
                <SimpleCard type="DEFAULTGLASS" title="Title" className="m-2">
                    Content
                </SimpleCard>
                <SimpleCard type="GREENGLASS" className="m-2" title="Title">
                    Content
                </SimpleCard>
                <SimpleCard type="DANGERGLASS" className="m-2" title="Title">
                    Content
                </SimpleCard>
                <SimpleCard type="INFOGLASS" className="m-2" title="Title">
                    Content
                </SimpleCard>
            </div>
            <DataTable value={products} paginator rows={5}>
                <Column style={{width: "10px"}} field="id" header="ID"/>
                <Column style={{width: "120px"}} field="name" header="Name"/>
                <Column style={{width: "80px"}} field="username" header="Username"/>
                <Column style={{width: "180px"}} field="email" header="Email"/>
                <Column style={{width: "120px"}} field="phone" header="Phone"/>
                <Column style={{width: "120px"}} field="website" header="Website"/>
                <Column style={{width: "120px"}} field="company.name" header="Company Name"/>
                <Column style={{width: "120px"}} field="company.catchPhrase" header="About"/>
            </DataTable>
        </>
    );
}

export default App;