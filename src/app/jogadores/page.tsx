"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, UserPlus, Search, Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { jogadoresAvulsoData, jogadoresMensalData } from "@/mocks";

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

import { Label } from "@/components/ui/label";

const JogadoresPage = () => {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Jogadores</h2>
        <div className="flex items-center space-x-2">
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button className="bg-secondary hover:bg-secondary/60 cursor-pointer text-neutral-900">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Adicionar Mensalista
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

      <div className="flex items-center space-x-2">
        <div className="relative max-w-sm flex-1">
          <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
          <Input
            placeholder="Buscar jogadores..."
            className="border-none pl-10 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total de Jogadores
            </CardTitle>
            <Users className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-muted-foreground text-xs">
              +2 desde o mês passado
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Jogadores Ativos
            </CardTitle>
            <Users className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22</div>
            <p className="text-muted-foreground text-xs">91.7% dos jogadores</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Novos este Mês
            </CardTitle>
            <Users className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-muted-foreground text-xs">
              +1 desde a semana passada
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Em Débito</CardTitle>
            <Users className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-muted-foreground text-xs">8.3% dos jogadores</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Mensalistas</CardTitle>
          <CardDescription>
            Gerencie todos os mensalistas da pelada
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>Os bagres estão listados acima</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] font-bold text-white">
                  Nome
                </TableHead>
                <TableHead className="font-bold text-white">Status</TableHead>
                <TableHead className="font-bold text-white">Telefone</TableHead>
                <TableHead className="font-bold text-white">
                  Última mensalidade
                </TableHead>
                <TableHead className="text-right font-bold text-white">
                  Ações
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jogadoresMensalData.map((jogador, index) => (
                <TableRow className="border-b border-neutral-600" key={index}>
                  <TableCell className="max-w-[300px] min-w-[150px] overflow-hidden font-medium text-ellipsis whitespace-nowrap">
                    {jogador.nome}
                  </TableCell>
                  <TableCell>
                    <div
                      className={`inline-flex justify-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        jogador.status === "Ativo"
                          ? "bg-lime-500 text-neutral-950"
                          : "bg-red-500 text-neutral-100"
                      }`}
                    >
                      {jogador.status}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {jogador.telefone}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {jogador.ultimaMensalidade}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" className="p-2">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Avulsos</CardTitle>
          <CardDescription>Gerencie todos os avulsos da pelada</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>Os bagres estão listados acima</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] font-bold text-white">
                  Nome
                </TableHead>
                <TableHead className="font-bold text-white">Status</TableHead>
                <TableHead className="font-bold text-white">
                  Indicação
                </TableHead>
                <TableHead className="font-bold text-white">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jogadoresAvulsoData.map((jogador, index) => (
                <TableRow
                  className="border-b border-neutral-600 hover:bg-neutral-800"
                  key={index}
                >
                  <TableCell className="max-w-[300px] min-w-[150px] overflow-hidden font-medium text-ellipsis whitespace-nowrap">
                    {jogador.nome}
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
                  <TableCell className="text-muted-foreground">
                    {jogador.quemTrouxe}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" className="p-2">
                      <Pencil className="h-4 w-4" />
                    </Button>
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

export default JogadoresPage;
