import { TipoNotificacao } from "@/interfaces/INotificacoes";
import { store } from "@/store";
import { NOTIFICAR } from "@/store/tipo-mutacoes";

export const notificationMixin = {
    methods: {
        notificar(tipo: TipoNotificacao, titulo: string, texto: string) {
            store.commit(NOTIFICAR, {
                titulo: titulo,
                texto: texto,
                tipo: tipo
            });
        }
    }
}