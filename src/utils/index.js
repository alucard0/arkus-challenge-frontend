export const formatCurrency=(amount)=>{
  const options = { style: 'currency', currency: 'MXN' };
  const numberFormat = new Intl.NumberFormat('es-MX', options);
  return numberFormat.format(amount)
}