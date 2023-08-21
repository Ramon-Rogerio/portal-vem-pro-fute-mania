import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { UsersService } from "../../../shared/services/api/users/Users";
import Page from "@/components/Page";

export default function ListUsers() {
  const [isloading, setIsloading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UsersService.getAll(1, 20).then((result) => {
      if (result instanceof Error) {
        alert(result.message);
      } else {
        setUsers(result);
        setIsloading(false);
      }
    });
  });

  return (
    <Page title="Dashboard | Usuários">
      <Container maxWidth="xl">
        {!isloading ? (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>E-mail</TableCell>
                  <TableCell>Permissões</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.role}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography variant="h3">Carregando os dados...</Typography>
        )}
      </Container>
    </Page>
  );
}
