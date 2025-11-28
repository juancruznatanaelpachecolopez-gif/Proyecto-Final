<script>
document.getElementById("form-registro").addEventListener("submit", function(e){
    e.preventDefault(); // evita recargar la página

    // oculta la caja de registro
    document.querySelector(".registro-box").style.display = "none";

    // muestra el mensaje de éxito
    document.getElementById("mensaje-exito").style.display = "block";
});
</script>
