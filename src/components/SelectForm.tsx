import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { Category, categoryState } from "../atoms";

export default function SelectForm() {
  const [category, setCategory] = useRecoilState<Category>(categoryState);

  const handleChangeCategory = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedCategory = event.currentTarget.value as Category;
      setCategory(selectedCategory);
    },
    [setCategory]
  );

  return (
    <form>
      <select value={category} onInput={handleChangeCategory} style={{ borderColor: "white" }}>
        {Object.values(Category).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </form>
  );
}
