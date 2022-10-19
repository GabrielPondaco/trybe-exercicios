total = 0

for index in range(5):
    numero = 0
    try:
        valor = input("Digite um número para soma")
        numero = int(valor)
    except Exception:
        print(f"Erro ao somar valores, {valor} é um valor inválido")
    total += numero

print(f"A soma dos numeros é {total}")
