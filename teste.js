            <form id="formUtilizador" action="index.jsp">
                <div>
                    <span class="label">Data de nascimento:</span><cp:caixa-data nome="dataDeNascimento"/>
                </div>
                <div id="erroDataDeNascimentoVazio" class="erro">
                    O campo data de nascimento não pode ser vazio
                </div>
                <div id="erroDataDeNascimentoMalFormatado" class="erro">
                    O campo data de nascimento não pode ser vazio
                </div>
                <div>
                    <span class="label">Nome:</span><input type="text" name="nome">
                </div>
                <div id="erroNomeVazio" class="erro">
                    O campo nome não pode ser vazio
                </div>
                <input type="submit" value="submeter">
            </form>
            <script>
                $("#formUtilizador").submit(function () {
                    $("#erroDataDeNascimentoVazio,#erroNomeVazio,#erroDataDeNascimentoMalFormatado").hide();
                    retorno = true;
                    if (!$("input[name=dataDeNascimento]").val()) {
                        $("#erroDataDeNascimentoVazio").show();
                        retorno = false;
                    }
                    if (!$("input[name=nome]").val()) {
                        $("#erroNomeVazio").show();
                        retorno = false;
                    }
                    return retorno;
                });
            </script>
