
import Button from "./button";

export default function Form() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const weight = formData.get("weight");
    console.log(weight);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="weight"
        id="weight"
        className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <Button />
    </form>
  );
}