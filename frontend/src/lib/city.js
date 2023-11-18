export async function getProvinces() {
    const data = await fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
  
    if (!data.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return data.json()
  }