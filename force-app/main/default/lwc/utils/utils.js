export const formatCurrency = (number, currencyCode = 'USD')=> {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode
    }).format(number);
}