export const ServiceDeleteAll = () => {
  function handleClick() {
    const confirmation = confirm(
      "tüm verileri silmek istediğinizden emin misiniz ?"
    );
    if (confirmation) {
      console.log("veriler siliniyor");
      localStorage.clear();
      window.location.reload();
    }
  }

  return (
    <>
      <input
        type="button"
        value="Tüm Kullanıcıları Sil"
        className="btn btn-danger w-100 mt-4"
        onClick={handleClick}
      />
    </>
  );
};
