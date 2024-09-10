import { type FC, useState } from "react";

export const Card: FC = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>
                Increment: {count}
            </button>
        </div>
    )
}

export default Card;