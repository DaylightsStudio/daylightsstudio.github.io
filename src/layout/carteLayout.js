function CarteLayout(props) {
    return (
    <div>
        <ul>
            <li>Home</li>
            <li>Users</li>
        </ul>

        {
            props.children
        }
    </div>
);

}

export default CarteLayout;