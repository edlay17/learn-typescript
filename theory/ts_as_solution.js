/*
TS добавляет:

1) enum (специальный тип и константы внутри)
Использование в реальной жизни:
enum StatusCodes {
    NotFound = 404,
    ServerError = 500,
}

function sum(a: StatusCodes, b: StatusCodes) {
}

sum(StatusCodes.ServerError, StatusCodes.NotFound);
конвертация в обе стороны
StatusCodes[500]

Минусы: нельзя простым путем спредить в отличии от обычных объектов


2) Декораторы

*/