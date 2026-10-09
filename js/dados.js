/* Nome bonito de cada mood (a chave tem que ser igual ao "mood" das fitas e aos botões do HTML) */
var nomesMood = {
  madrugada: "Madrugada",
  sol: "Dia de sol",
  melancolia: "Melancolia",
  rock: "Rock'n'roll",
};

/* Campos de cada fita:
   artista   -> nome que aparece no rótulo do K7
   faixa     -> nome da música
   mood      -> madrugada | sol | melancolia | rock
   capa      -> nome do arquivo dentro de img/capas/ (minúsculo, sem espaço nem acento)
   destaque  -> true se for aparecer na home em "Em destaque" (opcional) */
var fitas = [
  {
    artista: "Artista 01",
    faixa: "Nome da faixa 01",
    mood: "madrugada",
    capa: "madrugada-01.jpg",
    destaque: true,
  },
  {
    artista: "Artista 02",
    faixa: "Nome da faixa 02",
    mood: "madrugada",
    capa: "madrugada-02.jpg",
  },
  {
    artista: "Artista 03",
    faixa: "Nome da faixa 03",
    mood: "sol",
    capa: "sol-01.jpg",
    destaque: true,
  },
  {
    artista: "Artista 04",
    faixa: "Nome da faixa 04",
    mood: "sol",
    capa: "sol-02.jpg",
  },
  {
    artista: "Artista 05",
    faixa: "Nome da faixa 05",
    mood: "melancolia",
    capa: "melancolia-01.jpg",
    destaque: true,
  },
  {
    artista: "Artista 06",
    faixa: "Nome da faixa 06",
    mood: "melancolia",
    capa: "melancolia-02.jpg",
  },
  {
    artista: "Artista 07",
    faixa: "Nome da faixa 07",
    mood: "rock",
    capa: "rock-01.jpg",
  },
  {
    artista: "Artista 08",
    faixa: "Nome da faixa 08",
    mood: "rock",
    capa: "rock-02.jpg",
  },
];
