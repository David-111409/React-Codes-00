import React from "react";
function App() {
    const [newDevice, setNewDevice] = React.useState("");
    const [editDevice, setEditDevice] = React.useState("");
    function handleEdit(id) {
        const newList = list.map((device) => {
            if (device.id === id) {
                setEditDevice(device.name);
                return { ...device, openEdit: true };
            }
            return { ...device, openEdit: false };
        });
        setList(newList);
    }
    const devices = [
        { id: 1, name: "iPhone 15 Pro", openEdit: false },
        { id: 2, name: "Samsung Galaxy S24", openEdit: false },
        { id: 3, name: "Google Pixel 9", openEdit: false },
        { id: 4, name: "iPad Pro 12.9", openEdit: false },
        { id: 5, name: "MacBook Air M2", openEdit: false },
        { id: 6, name: "Dell XPS 13", openEdit: false },
    ];
    const [list, setList] = React.useState(devices);
    function handleDelete(id) {
        const newList = list.filter((device) => device.id !== id);
        setList(newList);
    }
    function handleSave(id) {
        const newList = list.map((device) => {
            if (device.id === id) {
                return { ...device, name: editDevice, openEdit: false };
            }
            return device;
        });
        setList(newList);
    }
    const deviceList = list.map((device) => (
        <li key={device.id}>
            {device.name}{" "}
            <button onClick={() => handleDelete(device.id)}>Delete</button>{" "}
            {!device.openEdit && (
                <button onClick={() => handleEdit(device.id)}>Edit</button>
            )}
            {device.openEdit && (
                <>
                    <input
                        placeholder="edit device"
                        onChange={(e) => setEditDevice(e.target.value)}
                        value={editDevice}
                    />
                    <button onClick={() => handleSave(device.id)}>Save</button>
                </>
            )}
        </li>
    ));

    return (
        <>
            {deviceList}
            <input
                type="text"
                placeholder="add new device"
                value={newDevice}
                onChange={(e) => setNewDevice(e.target.value)}
            />
            <button
                onClick={() =>
                    setList([
                        ...list,
                        {
                            id: list.length + 1,
                            name: newDevice,
                            openEdit: false,
                        },
                    ])
                }
            >
                Add
            </button>
        </>
    );
}

export default App;
