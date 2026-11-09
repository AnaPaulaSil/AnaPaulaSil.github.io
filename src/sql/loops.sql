use fornada

select 
	pbp_cpf
	,pbp_celular
	,UPPER(LEFT(LTRIM(pbp_nome), 1)) +
    LOWER(SUBSTRING(LTRIM(pbp_nome), 2, CHARINDEX(' ', LTRIM(pbp_nome) + ' ') - 2)) nome,
	convert(int,pbp_saldo)
from pb_participantes_fornada
where pbp_status = 'Ativo' and pbp_comunicacao_whatsapp in ('SIM','Não Informado')
and pbp_celular != '' and pbp_celular != '11111111111' and pbp_nome is not null and pbp_saldo > 19 and pbp_profissao = 'proprietário'