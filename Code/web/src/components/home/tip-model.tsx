type TipModalProps = {
  number: number;
  tip: string;
};

function TipModal({ number, tip }: TipModalProps) {
  return (
    <div className="flex flex-col items-center space-y-2 p-4 bg-white rounded-2xl shadow-md">
      <div className="text-4xl font-bold text-gray-800">
        {number}
      </div>
      <div className="text-sm text-gray-600 font-medium text-center">
        {tip}
      </div>
    </div>
  );
}

export default TipModal;