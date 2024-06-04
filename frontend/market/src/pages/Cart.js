import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { DeleteForeverOutlined } from '@mui/icons-material';
import { clearCart, removeItem } from '../store/slices/cartSlice';
import { toast } from 'react-toastify';
import YesNoModal from '../components/YesNoModal';

function Cart() {



  const { products } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const [isShowModal, setIsShowModal] = useState(false)
  const [isShowModalAll, setIsShowModalAll] = useState(false)
  const [productId, setProductId] = useState("")


  const removeItemFromComponenet = async (id) => {
    setIsShowModal(true)
    setProductId(id)
  }

  const onClickYes = () => {
    setIsShowModal(false)
    dispatch(removeItem(productId))
    toast.success("Product Removed!")
  }

  const onClickYesAll = () => {
    setIsShowModalAll(false)
    dispatch(clearCart())
    toast.success("Products Deleted")
  }

  // const 

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img src={product.image} alt='product_image' className='cartImage' />
                </TableCell>
                <TableCell>{product.productName}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.cartQuantity}</TableCell>
                <TableCell><DeleteForeverOutlined color='error' onClick={() => removeItemFromComponenet(product._id)} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className='flex justify-end m-4'>
        <Button color='error'
          onClick={() => setIsShowModalAll(true)}
          variant='outlined' startIcon={<DeleteForeverOutlined />}>Clear Cart</Button>
      </div>
      {/* Tek Tek silim için kullanılan modal */}
      <YesNoModal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        title="Remove From Cart"
        desc="Would you like to remove item from cart?"
        onClickYes={onClickYes}
      />
      {/* Çoklu Silim(remove Cart) için kullanılan modal */}
      <YesNoModal
        isShowModal={isShowModalAll}
        setIsShowModal={setIsShowModalAll}
        title="Clear Cart"
        desc="Would you like to clear cart?"
        onClickYes={onClickYesAll}
      />
    </>
  )
}

export default Cart