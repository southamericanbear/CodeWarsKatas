export const travel = (r: string, zipcode: string): string => {
  if (r === '') {
    return `${zipcode}:/`;
  }

  const arrOfDirections: string[] = r.split(',');
  let arrOfStreets: string[] = [];
  let arrOfAddressNumbers: string[] = [];
  let foundZipcode = false;

  for (let index in arrOfDirections) {
    const address = arrOfDirections[index].trim();
    const parts = address.split(' ');

    if (parts.slice(-2).join(' ') === zipcode) {
      foundZipcode = true;
      const addressNumber = parts[0];
      const street = parts.slice(1, -2).join(' ');
      arrOfStreets.push(street);
      arrOfAddressNumbers.push(addressNumber);
    }
  }

  if (!foundZipcode) {
    return `${zipcode}:/`;
  }

  return `${zipcode}:${arrOfStreets.join(',')}/${arrOfAddressNumbers.join(',')}`;
};
