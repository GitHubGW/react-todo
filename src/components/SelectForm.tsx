import { useRecoilState } from "recoil";
import { Category, categoryState } from "../atoms";

const SelectForm = () => {
  const [category, setCategory] = useRecoilState<Category>(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as Category);
  };

  return (
    <form>
      <select value={category} onInput={onInput}>
        <option value={Category.TODO}>To Do</option>
        <option value={Category.DOING}>Doing</option>
        <option value={Category.DONE}>Done</option>
      </select>
    </form>
  );
};

export default SelectForm;
