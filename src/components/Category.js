function Category(props) {

    return (
        <div className="category-card">

            <div className="category-icon">
                {props.icon}
            </div>

            <p>{props.name}</p>

        </div>
    );
}

export default Category;
