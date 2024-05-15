import styles from "./Keyboard.module.css";

const Keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  disabled?: boolean;
  activeLetter: string[];
  inactiveLetter: string[];
  addGuessedLetter: (letter: string) => void;
};

export const Keyboard = ({
  activeLetter,
  inactiveLetter,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {Keys.map((item) => {
        const isActive = activeLetter.includes(item);
        const isInactive = inactiveLetter.includes(item);

        return (
          <button
            disabled={isInactive || isActive || disabled}
            onClick={() => addGuessedLetter(item)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            key={item}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
