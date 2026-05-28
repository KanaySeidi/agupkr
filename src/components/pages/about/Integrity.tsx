import { useEffect } from "react";
import Line from "@/components/atoms/Line";
import { useHonestyStore } from "@/store/honesty.store";

const Integrity = () => {
  const items = useHonestyStore((s) => s.items);
  const status = useHonestyStore((s) => s.status);
  const fetchList = useHonestyStore((s) => s.fetchList);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const record = items[0];

  if ((status === "idle" || status === "loading") && !record) return null;

  return (
    <div className="w-full flex flex-col gap-5">
      {record?.title && <Line title={record.title} />}
      {record?.photo_url && (
        <img
          src={record.photo_url}
          alt={record.title}
          className="rounded-md w-full object-cover"
        />
      )}
      {record?.description && (
        <div className="mt-20 whitespace-pre-line">{record.description}</div>
      )}
    </div>
  );
};

export default Integrity;
