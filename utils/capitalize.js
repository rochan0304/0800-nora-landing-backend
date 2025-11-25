exports.capitalize = (valor) => {
    if ( !valor || typeof valor !== 'string' ) {
        return valor;
    }
    const lower = valor.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
};