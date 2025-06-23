// Generate 1000+ random mock service data for development/testing
const categories = ["Hair", "Spa", "Nails", "Skin", "Massage", "Makeup", "Waxing", "Facial", "Body", "Grooming"];
const adjectives = ["Deluxe", "Express", "Classic", "Premium", "Ultimate", "Gentle", "Quick", "Luxury", "Essential", "Signature"];
const services = ["Cut", "Color", "Wash", "Blowdry", "Manicure", "Pedicure", "Treatment", "Shave", "Trim", "Style"];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFrom(arr) {
  return arr[getRandomInt(0, arr.length - 1)];
}

const mockServices = Array.from({ length: 1000 }, (_, i) => {
  const name = `${randomFrom(adjectives)} ${randomFrom(services)} #${i + 1}`;
  const price = getRandomInt(100, 2000);
  const duration = `${getRandomInt(10, 120)} min`;
  const category = randomFrom(categories);
  return { name, price, duration, category };
});

export default mockServices; 