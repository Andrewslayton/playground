type OrderSummaryProps = {
  totalItems: number;
  subtotal: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Exercise scaffold.
export default function OrderSummary(props: OrderSummaryProps) {
    return (
      <div className="bg-amber-950 col-auto " >
        <ul>
          {props.totalItems}
        </ul>
        <ul>
          {props.subtotal}
        </ul>
      </div>
    )
}
