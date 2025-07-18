import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Banknote, Calendar, DollarSign, UserPlus } from "lucide-react";

import {
  pagamentosPendentesData,
  pagamentosRecentesData,
  historicoPagamentosData,
} from "@/mocks";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const MensalidadesPage = () => {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Mensalidades</h2>
        <div className="flex items-center space-x-2">
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button className="bg-secondary hover:bg-secondary/60 cursor-pointer text-neutral-900">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Registrar Mensalidade
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Adicionar um mensalista</DialogTitle>
                  <DialogDescription>
                    Adicione um novo jogador mensalista ao sistema.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Nome</Label>
                    <Input
                      id="name-1"
                      name="name"
                      placeholder="Cristiano Ronaldo"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">Telefone</Label>
                    <Input
                      id="phone-1"
                      name="phone"
                      placeholder="31 99999-9999"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancelar</Button>
                  </DialogClose>
                  <Button
                    type="submit"
                    className="bg-secondary hover:bg-secondary/60 cursor-pointer text-neutral-900"
                  >
                    Salvar
                  </Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Receita do Mês
            </CardTitle>
            <DollarSign className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 1.200,00</div>
            <p className="text-muted-foreground text-xs">
              +8.3% em relação ao mês passado
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pagamentos em Dia
            </CardTitle>
            <Banknote className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22</div>
            <p className="text-muted-foreground text-xs">91.7% dos jogadores</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
            <Calendar className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-muted-foreground text-xs">R$ 100,00 em atraso</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Valor da Mensalidade
            </CardTitle>
            <DollarSign className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 50,00</div>
            <p className="text-muted-foreground text-xs">Valor atual</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Pagamentos Recentes</CardTitle>
            <CardDescription>Últimos pagamentos recebidos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pagamentosRecentesData.map((pagamento, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-lime-600 p-3"
                >
                  <div>
                    <p className="font-medium">{pagamento.nome}</p>
                    <p className="text-muted-foreground text-sm">
                      {pagamento.data}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{pagamento.valor}</p>
                    <span className="inline-flex items-center rounded-full bg-lime-500 px-2.5 py-0.5 text-xs font-medium text-neutral-950">
                      {pagamento.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pendências</CardTitle>
            <CardDescription>
              Jogadores com pagamentos em atraso
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pagamentosPendentesData.map((pendencia, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-red-500 p-3"
                >
                  <div>
                    <p className="font-medium">{pendencia.nome}</p>
                    <p className="text-muted-foreground text-sm">
                      {pendencia.meses}
                    </p>
                    <p className="text-xs text-red-600">
                      {pendencia.diasAtraso} dias em atraso
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{pendencia.valor}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-1 bg-neutral-200 text-neutral-900 hover:bg-neutral-400"
                    >
                      Cobrar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Histórico de Mensalidades</CardTitle>
          <CardDescription>Controle completo dos pagamentos</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>Quem não paga, não joga!</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] font-bold text-white">
                  Jogador
                </TableHead>
                <TableHead className="font-bold text-white">Mês/Ano</TableHead>
                <TableHead className="font-bold text-white">Valor</TableHead>
                <TableHead className="font-bold text-white">
                  Data do Pagamento
                </TableHead>
                <TableHead className="font-bold text-white">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {historicoPagamentosData.map((jogador, index) => (
                <TableRow
                  className="border-b border-neutral-600 hover:bg-neutral-800"
                  key={index}
                >
                  <TableCell className="max-w-[300px] min-w-[150px] overflow-hidden font-medium text-ellipsis whitespace-nowrap">
                    {jogador.nome}
                  </TableCell>
                  <TableCell className="font-medium">
                    {jogador.mesAno}
                  </TableCell>
                  <TableCell className="font-medium">{jogador.valor}</TableCell>
                  <TableCell className="font-medium">
                    {jogador.dataPagamento}
                  </TableCell>
                  <TableCell>
                    <div
                      className={`inline-flex justify-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        jogador.status === "Pago"
                          ? "bg-lime-500 text-neutral-950"
                          : "bg-red-500 text-neutral-100"
                      }`}
                    >
                      {jogador.status}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default MensalidadesPage;
