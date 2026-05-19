const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1 className="greeting-message">{greeting}</h1>
      <p className="container-subtitle">
        Explora nuestro catálogo de productos y encuentra lo que buscas.
      </p>
    </div>
  );
};

export default ItemListContainer;

