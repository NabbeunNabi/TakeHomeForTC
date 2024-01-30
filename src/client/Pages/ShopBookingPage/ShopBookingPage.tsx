import { useController } from "./useController";

export function ShopBookingPage(): JSX.Element {
  const apiFromController = useController();

  return (
    <div>
      <h1 data-testid="Shop Title">{apiFromController.title}</h1>
      <button data-testid="Party Size CTA" onClick={apiFromController.openCTA}>
        click here to set party size
      </button>
      {apiFromController.renderModal()}
    </div>
  );
}
