import Swal from "sweetalert2";

const ColorList = ({ colorList, handleClickClearColors }) => {
  const handleCopyColor = (color) => {
    navigator.clipboard.writeText(color);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "¡Copiado!",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };

  return (
    <>
      {colorList.length > 0 && (
        <button
          onClick={handleClickClearColors}
          className="btn btn-danger my-4 w-100"
        >
          Clear list
        </button>
      )}

      <div className="list-group text-center">
        {colorList.length ? (
          colorList.map((color, i) => (
            <button
              key={i}
              type="button"
              className="list-group-item list-group-item-action"
              aria-current="true"
              title="Copiar"
              style={{ background: color, fontWeight: "bolder" }}
              onClick={() => handleCopyColor(color)}
            >
              {color}
            </button>
          ))
        ) : (
          <div className="alert alert-danger" role="alert">
            <b>Sin colores guardados</b>
          </div>
        )}
      </div>
    </>
  );
};

export default ColorList;
