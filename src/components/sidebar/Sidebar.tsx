import React from "react";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  PanelBottom,
  Home,
  Users,
  LogOut,
  Wallet,
  Banknote,
  Volleyball,
} from "lucide-react";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const Sidebar = () => {
  return (
    <>
      {/* Sidebar Desktop */}
      <aside className="bg-sidebar fixed inset-y-0 left-0 z-10 hidden w-14 sm:flex sm:flex-col">
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Link
              href="/inicio"
              className="bg-primary text-primary-foreground flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
            >
              <Volleyball className="h-4 w-4" />
              <span className="sr-only">Dashboard Avatar</span>
            </Link>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/inicio"
                  className="text-primary hover:bg-primary/80 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors hover:text-white"
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Início</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Início</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/jogadores"
                  className="text-primary hover:bg-primary/80 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors hover:text-white"
                >
                  <Users className="h-5 w-5" />
                  <span className="sr-only">Jogadores</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Jogadores</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/mensalidades"
                  className="text-primary hover:bg-primary/80 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors hover:text-white"
                >
                  <Banknote className="h-5 w-5" />
                  <span className="sr-only">Mensalidades</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Mensalidades</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/transacoes"
                  className="text-primary hover:bg-primary/80 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors hover:text-white"
                >
                  <Wallet className="h-5 w-5" />
                  <span className="sr-only">Transações</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Transações</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>

        {/* Colocar icone de logout no fim do sidebar */}
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="text-primary hover:bg-primary/80 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-900 transition-colors hover:text-white"
                >
                  <LogOut className="h-5 w-5 text-red-500" />
                  <span className="sr-only">Sair</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Sair</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      {/* Sidebar Mobile */}
      <div className="sm:hidden">
        <header className="bg-sidebar sticky top-0 z-30 flex h-14 items-center gap-4 px-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelBottom className="h-5 w-5" />
                <span className="sr-only">Abrir / fechar menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/inicio"
                  className="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center gap-2 rounded-full sm:text-base"
                  prefetch={false}
                >
                  <Volleyball className="h-5 w-5 transition-all" />
                  <span className="sr-only">Logo do projeto</span>
                </Link>

                <Link
                  href="/inicio"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
                  prefetch={false}
                >
                  <Home className="h-5 w-5 transition-all" />
                  Início
                </Link>

                <Link
                  href="/jogadores"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
                  prefetch={false}
                >
                  <Users className="h-5 w-5 transition-all" />
                  Jogadores
                </Link>

                <Link
                  href="/transacoes"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
                  prefetch={false}
                >
                  <Wallet className="h-5 w-5 transition-all" />
                  Transações
                </Link>

                <Link
                  href="/mensalidades"
                  className="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5"
                  prefetch={false}
                >
                  <Banknote className="h-5 w-5 transition-all" />
                  Mensalidades
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <h2>Menu</h2>
        </header>
      </div>
    </>
  );
};

export default Sidebar;
