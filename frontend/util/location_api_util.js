export const fetchLocations = () => (
  $.ajax({
    method: 'Get',
    url: 'api/locations',
  })
);