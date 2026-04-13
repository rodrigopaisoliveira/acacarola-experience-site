

## Problema Atual

A sidebar tem links redundantes e confusos:
- **"Menu > Menu de Grupo"** e **"Grupos e Eventos Privados"** fazem essencialmente a mesma coisa
- **"Reservas"** e **"Grupos e Eventos Privados"** apontam ambos para `/reservas`
- **"Avaliações de Clientes"** e **"Contacto"** são âncoras na homepage, não páginas reais
- São 7+ opções quando bastam 4-5

## Proposta: Sidebar Simplificada

Reduzir para **5 links claros**, sem dropdowns nem duplicações:

```text
NOVO EDMUNDO                    ✕

  Início
  Menu
  Menu de Grupo
  Encomendas
  Reservar Mesa

  ─────────────────────────
  📍 Rua da Pontinha, Lisboa
  📞 214 794 087
```

**Mudanças:**
1. **Remover** o dropdown do Menu — "Menu" e "Menu de Grupo" ficam como links diretos e separados, simples e claros
2. **Remover** "Grupos e Eventos Privados" — é redundante com "Menu de Grupo"
3. **Remover** "Avaliações de Clientes" e "Contacto" — são secções da homepage, não precisam de estar na navegação principal (o utilizador chega lá ao fazer scroll)
4. **Renomear** "Entrega e Levantamento" para **"Encomendas"** — mais curto e direto
5. **Renomear** "Reservas" para **"Reservar Mesa"** — mais claro sobre a ação
6. **Adicionar** "Início" para voltar à homepage

**Ficheiro a editar:** `src/components/Layout.tsx` — simplificar a lista de links e remover a lógica do dropdown.

