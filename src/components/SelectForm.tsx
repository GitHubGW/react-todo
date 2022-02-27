import { useRecoilState } from "recoil";
import { Category, categoryState } from "../atoms";

export default function SelectForm() {
  const [category, setCategory] = useRecoilState<Category>(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>): void => {
    setCategory(event.currentTarget.value as Category);
  };

  return (
    <form>
      <select value={category} onInput={onInput} style={{ borderColor: "white" }}>
        <option value={Category.TODO}>To Do</option>
        <option value={Category.DOING}>Doing</option>
        <option value={Category.DONE}>Done</option>
      </select>
    </form>
  );
}
