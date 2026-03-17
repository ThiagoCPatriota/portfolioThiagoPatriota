        document.querySelectorAll('.filtro').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filtro').forEach(b => b.classList.remove('ativo'));
                btn.classList.add('ativo');
                const f = btn.dataset.filtro;
                document.querySelectorAll('.cartao').forEach(c => {
                    c.style.display = (f === 'todos' || c.dataset.categoria.includes(f)) ? 'flex' : 'none';
                });
            });
        });