export default function groceriesList() {
  const list = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  console.log('Map {');
  for (const [key, value] of Object.entries(list)) {
    console.log(`   '${key}' => ${value},`);
  }
  console.log('}');
}
