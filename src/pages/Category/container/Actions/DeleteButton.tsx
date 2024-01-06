import Button, { ButtonTypes } from "@/common/Button";
import { ButtonHTMLAttributes, FC } from "react";
import { useDeleteCategoryMutation } from "@redux/Category/hooks/useCatagory";
interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
}
type DeleteButtonComponents = FC<DeleteButtonProps>;
const DeleteButton: DeleteButtonComponents = ({ id, ...resProps }) => {
  const [handelDelete, response] = useDeleteCategoryMutation();
  const handleDeleteButton = () => {
    handelDelete({
      id,
    });
  };
  return (
    <Button
      isLoading={response.isLoading}
      type="button"
      {...resProps}
      ButtonType={ButtonTypes.FourButton}
      className={`${resProps.className ? resProps.className : ""}`}
      onClick={handleDeleteButton}
    >
      Delete
    </Button>
  );
};

export default DeleteButton;
