import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function TableSection() {
  return (
    <div className="text-white font-semibold">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center text-sm font-semibold">
              Placa
            </TableHead>
            <TableHead className="text-center text-sm font-semibold">
              Frota
            </TableHead>
            <TableHead className="text-center text-sm font-semibold">
              Tipo
            </TableHead>
            <TableHead className="text-center text-sm font-semibold">
              Modelo
            </TableHead>
            <TableHead className="text-center text-sm font-semibold">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableHead className="text-center text-lg font-light text-white/60">
              EAD 7328
            </TableHead>
            <TableHead className="text-center text-lg font-light text-white/60">
              000001
            </TableHead>
            <TableHead className="text-center text-lg font-light text-white/60">
              Motor
            </TableHead>
            <TableHead className="text-center text-lg font-light text-white/60">
              FH 460
            </TableHead>
            <TableHead className="text-center text-lg font-light text-white/60">
              Em viagem
            </TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="text-center text-lg font-light text-white/60">
              EAD 7328
            </TableHead>
            <TableHead className="text-center text-lg font-light text-white/60">
              000001
            </TableHead>
            <TableHead className="text-center text-lg font-light text-white/60">
              Motor
            </TableHead>
            <TableHead className="text-center text-lg font-light text-white/60">
              FH 460
            </TableHead>
            <TableHead className="text-center text-lg font-light text-white/60">
              Em viagem
            </TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="text-center text-lg font-light text-white/60">
              EAD 7328
            </TableHead>
            <TableHead className="text-center text-lg font-light text-white/60">
              000001
            </TableHead>
            <TableHead className="text-center text-lg font-light text-white/60">
              Motor
            </TableHead>
            <TableHead className="text-center text-lg font-light text-white/60">
              FH 460
            </TableHead>
            <TableHead className="text-center text-lg font-light text-white/60">
              Em viagem
            </TableHead>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
